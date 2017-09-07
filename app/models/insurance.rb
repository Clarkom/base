class Insurance < ApplicationRecord
  belongs_to :expense, optional: true
  belongs_to :insurer, optional: true

  accepts_nested_attributes_for :expense, :allow_destroy => true

  validates :start_date, presence: true
  validates :expiration_date, presence: true

  def self.insurances_sum
    self.includes(:expense).pluck(:amount).sum
  end

  def self.insurances_by_year(year)
    self.where('extract(year from start_date) = ?', year)
             .select(Insurance.column_names - ['expense_id', 'insurer_id', 'police_number', 'created_at', 'updated_at'])
  end

end
