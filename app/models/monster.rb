class Monster < ApplicationRecord
    validates :name, :life, :mon_type, :cr, presence: true
    validates :cr, :life, numericality: { greater_than: 0 }
    validates :life, numericality: { only_integer: true }
    validates :cr, numericality: true
end
