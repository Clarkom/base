class IncomesController < ApplicationController
  before_action :set_income, only: [:show, :edit, :update, :destroy]

  # GET /incomes
  # GET /incomes.json
  def index
    @incomes = Income.group(:created_at)
    @incomes_sum = Income.sum(:amount)
    @manager_takes_sum = ManagerTake.includes(:income).pluck(:amount).sum
  end

  # GET /incomes/1
  # GET /incomes/1.json
  def show
  end

  # GET /incomes/new
  def new
    @income = Income.new
  end

  # GET /incomes/1/edit
  def edit

  end

  # POST /incomes
  # POST /incomes.json
  def create
    @income = Income.new(income_params)
    respond_to do |format|

      if @income.save
        format.html { redirect_to @income, notice: 'Income was successfully created.' }
        format.html { render :show, status: :created, location: @income }
      end

      if income_params.key?('manager_take_attributes') == false &&
          income_params.key?('owner_take_attributes') == false
        format.html { render :new }
      end
      if income_params.key?('manager_take_attributes')
        format.html { render :manager_take_fields }
      end

    end
  end
  
  def manager_take_fields
    @income = Income.new
    @income.build_manager_take
  end

  # PATCH/PUT /incomes/1
  # PATCH/PUT /incomes/1.json
  def update
    respond_to do |format|
      if @income.update(income_params)
        format.html { redirect_to edit_income_path(@income), notice: 'Income was successfully updated.' }
        format.json { render :edit, status: :ok, location: @income }
      else
        format.html { render :edit }
        format.json { render json: @income.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /incomes/1
  # DELETE /incomes/1.json
  def destroy

    @income.destroy
    
    respond_to do |format|
      format.html { redirect_to incomes_url, notice: 'Income was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_income
      @income = Income.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def income_params
      params.require(:income).permit(
          :amount,
          :attached_file,
          :description,
          :manager_take_attributes => [:id, :date]
      )
    end
end
