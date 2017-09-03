class CabModelsController < ApplicationController
  before_action :set_cab_model, only: [:show, :edit, :update, :destroy]

  # GET /cab_models
  # GET /cab_models.json
  def index
    @cab_models = CabModel.all
  end

  # GET /cab_models/1
  # GET /cab_models/1.json
  def show
  end

  # GET /cab_models/new
  def new
    @cab_model = CabModel.new
  end

  # GET /cab_models/1/edit
  def edit
  end

  # POST /cab_models
  # POST /cab_models.json
  def create
    @cab_model = CabModel.new(cab_model_params)

    respond_to do |format|
      if @cab_model.save
        format.html { redirect_to @cab_model, notice: 'Cab model was successfully created.' }
        format.json { render :show, status: :created, location: @cab_model }
      else
        format.html { render :new }
        format.json { render json: @cab_model.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /cab_models/1
  # PATCH/PUT /cab_models/1.json
  def update
    respond_to do |format|
      if @cab_model.update(cab_model_params)
        format.html { redirect_to @cab_model, notice: 'Cab model was successfully updated.' }
        format.json { render :show, status: :ok, location: @cab_model }
      else
        format.html { render :edit }
        format.json { render json: @cab_model.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /cab_models/1
  # DELETE /cab_models/1.json
  def destroy
    @cab_model.destroy
    respond_to do |format|
      format.html { redirect_to cab_models_url, notice: 'Cab model was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cab_model
      @cab_model = CabModel.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def cab_model_params
      params.require(:cab_model).permit(
          :name,
          :description,
          :manufacture_year,
          :fuel_type_id,
          :sheet_metal,
          :power_hp,
          :number_places
      )
    end
end
