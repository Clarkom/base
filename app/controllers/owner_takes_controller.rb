class OwnerTakesController < ApplicationController
  before_action :set_owner_take, only: [:show, :edit, :update, :destroy]

  # GET /owner_takes
  # GET /owner_takes.json
  def index
    @owner_takes = OwnerTake.all
    @owner_takes_sum = OwnerTake.includes(:expense).pluck(:amount).sum;
  end

  # GET /owner_takes/1
  # GET /owner_takes/1.json
  def show
  end

  # GET /owner_takes/new
  def new
    @owner_take = OwnerTake.new
    @owner_take.build_expense
  end

  # GET /owner_takes/1/edit
  def edit
  end

  # POST /owner_takes
  # POST /owner_takes.json
  def create
    @owner_take = OwnerTake.new(owner_take_params)

    respond_to do |format|
      if @owner_take.save
        format.html { redirect_to @owner_take, notice: 'Owner take was successfully created.' }
        format.json { render :show, status: :created, location: @owner_take }
      else
        format.html { render :new }
        format.json { render json: @owner_take.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /owner_takes/1
  # PATCH/PUT /owner_takes/1.json
  def update
    respond_to do |format|
      if @owner_take.update(owner_take_params)
        format.html { redirect_to @owner_take, notice: 'Owner take was successfully updated.' }
        format.json { render :show, status: :ok, location: @owner_take }
      else
        format.html { render :edit }
        format.json { render json: @owner_take.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /owner_takes/1
  # DELETE /owner_takes/1.json
  def destroy
    @owner_take.destroy
    respond_to do |format|
      format.html { redirect_to owner_takes_url, notice: 'Owner take was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_owner_take
      @owner_take = OwnerTake.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def owner_take_params
      params.require(:owner_take).permit(
          :expense_id,
          :owner_id,
          :date,
          :expense_attributes => [:id, :amount, :attached_file, :description]
      )
    end
end
