class Word < ApplicationRecord

# this is my business logic part

	def scramble
		word = self.word
		arr = word.split(//)
		self.output = arr.shuffle.join
	end

end
