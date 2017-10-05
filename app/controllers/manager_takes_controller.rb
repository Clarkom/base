class ManagerTakesController < ApplicationController
  before_action :set_manager_take, only: [:show, :edit, :update, :destroy]

  # GET /manager_takes
  # GET /manager_takes.json
  def index
    @manager_takes = ManagerTake.all
    @manager_takes_sum = ManagerTake.includes(:income).pluck(:amount).sum()
  end

  # GET /manager_takes/1
  # GET /manager_takes/1.json
  def show
  end

  # GET /manager_takes/new
  def new
    @manager_take = ManagerTake.new
    @manager_take.build_income
  end

  # GET /manager_takes/1/edit
  def edit
  end

  # POST /manager_takes
  # POST /manager_takes.json
  def create
    @manager_take = ManagerTake.new(manager_take_params)

    respond_to do |format|
      if @manager_take.save
        format.html { redirect_to @manager_take, notice: 'Owner take was successfully created.' }
        format.json { render :show, status: :created, location: @manager_take }
      else
        format.html { render :new }
        format.json { render json: @manager_take.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /manager_takes/1
  # PATCH/PUT /manager_takes/1.json
  def update
    respond_to do |format|
      if @manager_take.update(manager_take_params)
        format.html { redirect_to @manager_take, notice: 'Owner take was successfully updated.' }
        format.json { render :show, status: :ok, location: @manager_take }
      else
        format.html { render :edit }
        format.json { render json: @manager_take.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /manager_takes/1
  # DELETE /manager_takes/1.json
  def destroy
    @manager_take.destroy
    respond_to do |format|
      format.html { redirect_to manager_takes_url, notice: 'Owner take was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_manager_take
      @manager_take = ManagerTake.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def manager_take_params
      params.require(:manager_take).permit(
          :income_id,
          :date,
          :income_attributes => [:id, :amount, :attached_file, :description]
      )
    end
end
