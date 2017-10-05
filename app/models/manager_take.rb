class ManagerTake < ApplicationRecord
  belongs_to :income

  accepts_nested_attributes_for :income, :allow_destroy => true

  validates :date, presence: true

  #
  #
  #
  def self.manager_takes_sum
    self.includes(:income).pluck(:amount).sum
  end

end
