class Api::MonstersController < ApplicationController

    before_action :set_monster, only: [:destroy, :show, :update]

    def index
        render json: Monster.all
    end

    def show
        render json: @monster
    end

    def create
        @monster = Monster.new(set_params)
        if @monster.save
            render json: @monster
        else
            render json: {errors: @monster.errors}, status: :unprocessable_entity
        end
    end

    def update
        if @monster.update(set_params)
            render json: @monster
        else
            render json: {errors: @monster.errors}, status: :unprocessable_entity
        end
    end

    def destroy
        render json: @monster.destroy
        ## this is giving me the info on what was destroyed, while destroying it at the same time
    end

    private

    def set_params
        params.require(:monster).permit(:name, :life, :cr, :mon_type)
    end

    def set_monster
        @monster = Monster.find(params[:id])
    end

end
