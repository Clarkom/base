class Break < ApplicationRecord
  belongs_to :expense, optional: true
  belongs_to :break_cause

  accepts_nested_attributes_for :expense, :allow_destroy => true

  validates :start_date, presence: true
  validates :end_date, presence: true

end
