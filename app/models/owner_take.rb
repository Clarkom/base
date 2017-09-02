class OwnerTake < ApplicationRecord
  belongs_to :expense
  belongs_to :owner
end
