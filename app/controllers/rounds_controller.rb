class RoundsController < ApplicationController
  def new
    r = Round.new
    r.save
    render :json => r.to_json
  end

  def show
    round_id = params[:id]
    p = Participation.new
    cur_round = Round.find(round_id)
    p.round = cur_round
    p.save
  end
end
