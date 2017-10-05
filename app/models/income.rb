class Income < ApplicationRecord

  has_one :manager_take, dependent: :destroy

  accepts_nested_attributes_for :manager_take, :allow_destroy => true

  validates :amount, presence: true

  def self.incomes_sum
    self.pluck(:amount).sum
  end

end
