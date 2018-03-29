class HackathonsController < ApplicationController

  def index
    @hackathons = Hackathon.all
    render json: @hackathons
  end

  def show
    @hackathon = Hackathon.find(params[:id])
    render json: @hackathon
  end

  def create
    @hackathon = Hackathon.create(hackathon_params)
    render json: @hackathon
  end

  def destroy
    @hackathon = Hackathon.find(params[:id])
    @hackathon.destroy
    render json: @hackathon
  end

  private

  def hackathon_params
    params.require(:hackathon).permit(:name, :location, :language, :datetime)
  end


end
