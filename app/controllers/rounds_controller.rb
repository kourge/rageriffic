class RoundsController < ApplicationController
  def new
    r = Round.new
    r.save
    render :json => r.to_json
  end

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

    in_room = ps.count
    pics_taken = ps.select {|p| not p.face.nil? }.size
    frozen = cur_round.frozen

    res = {}
    res["in_room"] = in_room
    res["pics_taken"] = pics_taken
    res["frozen"] = frozen

    res
  end

  def start
  end
end
