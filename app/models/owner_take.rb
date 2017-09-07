class OwnerTake < ApplicationRecord
  belongs_to :expense
  belongs_to :owner

  accepts_nested_attributes_for :expense, :allow_destroy => true

  validates :date, presence: true

  def self.owner_takes_sum
    self.includes(:expense).pluck(:amount).sum
  end

end
