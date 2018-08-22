module Api
	module V1
		class WordSmithsController < ApplicationController
	    	def index
	    		render json: Word.all
	    	end

	    	# scramble in here that runs the scramble
	    end
	end
end