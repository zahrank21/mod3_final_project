class MealpalsController < ApplicationController

  def index
    @mealpals = Mealpal.all
    render json: @mealpals
  end

  def show

  end

  def new

  end

end
