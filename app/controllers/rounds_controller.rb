class RoundsController < ApplicationController
  def new
    r = Round.new
    r.save
    render :json => r.to_json
  end

  def show
  end
end
