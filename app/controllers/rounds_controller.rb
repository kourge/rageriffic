class RoundsController < ApplicationController
  def show
  end

  def play
    cur_round = (params[:id].nil? ? Round.new : Round.find(params[:id]))
    cur_round.save
    p = Participation.new
    p.name = params[:name]
    p.round = cur_round
    p.save
  end

  def state
    cur_round = Round.find(params[:id])
    ps = cur_round.participations

    res = {}
    res["in_room"] = ps.count
    res["pics_taken"] = ps.select {|p| not p.face.nil? }.size
    res["frozen"] = cur_round.frozen

    render :json => res.to_json
  end

  def start
    cur_round = Round.find(params[:id])
    cur_round.is_frozen = true;
    cur_round.save

    # empty page
    return ""
  end

  def pic
    cur_round = Round.find(params[:id])
    p = cur_round.participations.select {|p| p.id == params[:p_id] }.first
    p.face = params[:face]
    p.save

    return ""
  end

  def vote
    cur_round = Round.find(params[:id])
    v = Vote.new
    v.round = cur_round
    v.votee = params[:p_id]
    v.save

    return ""
  end

  def voting
    cur_round = Round.find(params[:id])
    ps = cur_round.participations
    vs = cur_round.votes

    res = {}
    res["voting_done"] = (ps.size == vs.size)

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
end
