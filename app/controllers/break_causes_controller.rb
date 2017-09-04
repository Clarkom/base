class BreakCausesController < ApplicationController
  before_action :set_break_cause, only: [:show, :edit, :update, :destroy]

  # GET /break_causes
  # GET /break_causes.json
  def index
    @break_causes = BreakCause.all
  end

  # GET /break_causes/1
  # GET /break_causes/1.json
  def show
  end

  # GET /break_causes/new
  def new
    @break_cause = BreakCause.new
  end

  # GET /break_causes/1/edit
  def edit
  end

  # POST /break_causes
  # POST /break_causes.json
  def create
    @break_cause = BreakCause.new(break_cause_params)

    respond_to do |format|
      if @break_cause.save
        format.html { redirect_to @break_cause, notice: 'Break type was successfully created.' }
        format.json { render :show, status: :created, location: @break_cause }
      else
        format.html { render :new }
        format.json { render json: @break_cause.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /break_causes/1
  # PATCH/PUT /break_causes/1.json
  def update
    respond_to do |format|
      if @break_cause.update(break_cause_params)
        format.html { redirect_to @break_cause, notice: 'Break type was successfully updated.' }
        format.json { render :show, status: :ok, location: @break_cause }
      else
        format.html { render :edit }
        format.json { render json: @break_cause.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /break_causes/1
  # DELETE /break_causes/1.json
  def destroy
    @break_cause.destroy
    respond_to do |format|
      format.html { redirect_to break_causes_url, notice: 'Break type was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_break_cause
      @break_cause = BreakCause.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def break_cause_params
      params.require(:break_cause).permit(:name)
    end
end
