class TasksController < ApplicationController

  def index
    @tasks = Task.all
    respond_to do |format|
      format.json { render json: @tasks.to_json }
    end
  end

  def destroy
    @task = Task.find params[:id]
    @task.destroy
    respond_to do |format|
      format.json { render nothing: true }
    end
  end

  def create 
    @task = Task.new task_params
    if @task.save
      respond_to do |format|
        format.json { render json: @task.to_json }
      end
    else
      respond_to do |format|
        format.json { render json: @task.errors.full_messages, status: 422 }
      end
    end
  end

  def update
    @task = Task.find params[:id]
    if @task.update_attributes task_params
      respond_to do |format|
        format.json { render json: @task.to_json }
      end
    else
      respond_to do |format|
        format.json { render json: @task.errors.full_messages, status: 422 }
      end
    end
  end

private
  def task_params
    params.require(:task).permit(:name)
  end
end
