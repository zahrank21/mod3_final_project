class WhiteboardsController < ApplicationController

  def index
    @whiteboards = Whiteboard.all
    render json: @whiteboards
  end

  def show
    @whiteboard = Whiteboard.find(params[:id])
    render json: @whiteboard

  end

  def create
    @whiteboard = Whiteboard.create(restaurant_params)
    render json: @whiteboard
  end

  def destroy
    @whiteboard = Whiteboard.find(params[:id])
    @whiteboard.destroy
    render json: @whiteboard

  end

  private

  def whiteboard_params
    params.require(:whiteboard).permit()
  end
end
