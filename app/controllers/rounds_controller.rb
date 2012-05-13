class RoundsController < ApplicationController
  def start_game
  end

  def show
  end

  def play
    cur_round = (params[:id].nil? ? Round.new : Round.find(params[:id]))
    cur_round.save
    if cur_round.is_frozen
      redirect_to :controller => 'game', :action => 'start_game'
    else
      # LOL HARD CODING URLS
      @url = File.join(request.base_url, "rounds", "#{cur_round.id}")
    end
  end

  def join
    cur_round = Round.find(params[:id])
    p = Participation.new
    p.name  = params[:name]
    p.round = cur_round
    p.save
    render :json => p.to_json
  end

  def state
    cur_round = Round.find(params[:id])
    ps = cur_round.participations

    res = {}
    res["in_room"] = ps.count
    res["pics_taken"] = ps.select {|p| not p.face.nil? }.size
    res["is_frozen"] = cur_round.is_frozen

    render :json => res.to_json
  end

  def start
    cur_round = Round.find(params[:id])
    cur_round.is_frozen = true;
    cur_round.save

    # empty page
    render :nothing => true
  end

  def pic
    cur_round = Round.find(params[:id])
    p = Participation.find(params[:p_id])
    p.face = params[:face]
    p.save

    render :nothing => true
  end

  def vote
    cur_round = Round.find(params[:id])
    v = Vote.new
    v.round = cur_round
    v.participation = Participation.find(params[:p_id])
    v.save

    render :nothing => true
  end

  def voting
    cur_round = Round.find(params[:id])
    ps = cur_round.participations
    vs = cur_round.votes
    res = {}

    res["voting_done"] = (ps.size <= vs.size)

    render :json => res.to_json
  end

  def participations
    res = []
    cur_round = Round.find(params[:id])

    cur_round.participations.each do |p|
      cur = {}
      cur["name"] = p.name
      cur["face"] = p.face
      cur["id"] = p.id
      res << cur
    end

    render :json => res.to_json
  end

  def winner
    cur_round = Round.find(params[:id])
    boss = cur_round.participations.inject do |p, n|
      (p.votes.count > n.votes.count ? p : n)
    end

    render :json => boss.to_json
  end

  def round
    render :json => Round.find(params[:id]).to_json
  end
end
