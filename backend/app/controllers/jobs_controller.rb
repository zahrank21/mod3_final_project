class JobsController < ApplicationController

  def index
    @jobs = Job.all
    render json: @jobs
  end

  def show
    @job = Job.find(params[:id])
    render json: @job
  end

  def create
    @job = Job.create(job_params)
    render json: @job
  end

  def destroy
    @job = Job.find(params[:id])
    @job.destroy
    render json: @job
  end

  private

  def job_params
    params.require(:job).permit(:title, :description, :company, :link)
  end


end
