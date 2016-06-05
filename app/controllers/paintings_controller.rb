class PaintingsController < ApplicationController
  def index
    @paintings = Painting.all
  end

  def show
    @painting = Painting.find(params[:id])
  end

  def new
    @painting = Painting.new
  end

  def create
    @painting = Painting.create(painting_params)
  end

  def edit
    @painting = Painting.find(params[:id])
  end

  def update
    @painting = Painting.find(params[:id])
    if @painting.update_attributes(painting_params)
      redirect_to paintings_url, notice: "Painting was successfully updated."
    else
      render :edit
    end
  end

  def destroy
    @painting = Painting.find(params[:id])
    @painting.destroy
    redirect_to paintings_url, notice: "Painting was successfully destroyed."
  end

  private

    def painting_params
      params.require(:painting).permit(:name, :image)
    end
end
