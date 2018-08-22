module Api
	module V1
		class WordsController < ApplicationController
	    	def index
	    		render json: Word.all
	    	end

		    def create
		    	
		      	@word = Word.new(word_params)
		      	@word.output = @word.scramble
		      	if @word.save
		      		render json: @word
		      	else
		      		render json: @word.errors, status: :unprocessable_entity
		      	end
		    end

		    	# scramble in here that runs the scramble
		    private

		    def word_params
		      	params.permit(:word)
		    end
	    end
	end
end




