class InssurancesController < ApplicationController
  before_action :set_inssurance, only: [:show, :edit, :update, :destroy]

  # GET /inssurances
  # GET /inssurances.json
  def index
    @inssurances = Inssurance.all
  end

  # GET /inssurances/1
  # GET /inssurances/1.json
  def show
  end

  # GET /inssurances/new
  def new
    @inssurance = Inssurance.new
  end

  # GET /inssurances/1/edit
  def edit
  end

  # POST /inssurances
  # POST /inssurances.json
  def create
    @inssurance = Inssurance.new(inssurance_params)

    respond_to do |format|
      if @inssurance.save
        format.html { redirect_to @inssurance, notice: 'Inssurance was successfully created.' }
        format.json { render :show, status: :created, location: @inssurance }
      else
        format.html { render :new }
        format.json { render json: @inssurance.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /inssurances/1
  # PATCH/PUT /inssurances/1.json
  def update
    respond_to do |format|
      if @inssurance.update(inssurance_params)
        format.html { redirect_to @inssurance, notice: 'Inssurance was successfully updated.' }
        format.json { render :show, status: :ok, location: @inssurance }
      else
        format.html { render :edit }
        format.json { render json: @inssurance.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /inssurances/1
  # DELETE /inssurances/1.json
  def destroy
    @inssurance.destroy
    respond_to do |format|
      format.html { redirect_to inssurances_url, notice: 'Inssurance was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_inssurance
      @inssurance = Inssurance.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def inssurance_params
      params.require(:inssurance).permit(:expense_id, :start_date, :end_date)
    end
end
