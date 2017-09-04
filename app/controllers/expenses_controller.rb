class ExpensesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_expense, only: [:show, :edit, :update, :destroy]

  # GET /expenses
  # GET /expenses.json
  def index
    @expenses = Expense.group(:created_at)
    @expenses_sum = Expense.sum(:amount)
  end

  # GET /expenses/1
  # GET /expenses/1.json
  def show
  end

  # GET /expenses/new
  def new
    @expense = Expense.new
  end

  # GET /expenses/1/edit
  def edit

  end

  # POST /expenses
  # POST /expenses.json
  def create
    @expense = Expense.new(expense_params)
    respond_to do |format|

      if @expense.save
        format.html { redirect_to @expense, notice: 'Expense was successfully created.' }
        format.html { render :show, status: :created, location: @expense }
      end

      if expense_params.key?('insurance_attributes') == false &&
          expense_params.key?('break_attributes') == false &&
          expense_params.key?('damage_attributes') == false &&
          expense_params.key?('owner_take_attributes') == false
        format.html { render :new }
      end
      if expense_params.key?('insurance_attributes')
        format.html { render :insurance_fields }
      end
      if expense_params.key?('break_attributes')
        format.html { render :break_fields }
      end
      if expense_params.key?('damage_attributes')
        format.html { render :damage_fields }
      end
      if expense_params.key?('owner_take_attributes')
        format.html { render :owner_take_fields }
      end

    end
  end
  
  def insurance_fields
    @expense = Expense.new
    @expense.build_insurance
  end

  def break_fields
    @expense = Expense.new
    @expense.build_break
  end

  def damage_fields
    @expense = Expense.new
    @expense.build_damage
  end

  def owner_take_fields
    @expense = Expense.new
    @expense.build_owner_take
  end
  
  # PATCH/PUT /expenses/1
  # PATCH/PUT /expenses/1.json
  def update
    respond_to do |format|
      if @expense.update(expense_params)
        format.html { redirect_to edit_expense_path(@expense), notice: 'Expense was successfully updated.' }
        format.json { render :edit, status: :ok, location: @expense }
      else
        format.html { render :edit }
        format.json { render json: @expense.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /expenses/1
  # DELETE /expenses/1.json
  def destroy

    @expense.destroy
    
    respond_to do |format|
      format.html { redirect_to expenses_url, notice: 'Expense was successfully destroyed.' }
      format.json { head :no_content }
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_expense
      @expense = Expense.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def expense_params
      params.require(:expense).permit(
          :amount,
          :attached_file,
          :description,
          :insurance_attributes => [:id, :start_date, :expiration_date, :insurer_id],
          :break_attributes => [:id, :start_date, :end_date, :break_cause_id, :damage_id],
          :damage_attributes => [:id, :damage_type_id, :driver_id, :expense_id, :date, :kilometers, :labor],
          :owner_take_attributes => [:id, :owner_id, :expense_id]
      )
    end
end
