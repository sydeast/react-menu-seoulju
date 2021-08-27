class User < ApplicationRecord
    has_many :menus

    #Validations:
    has_secure_password
    validates :email, presence: true, uniqueness: true
    validates :name, presence: true


    def self.from_omniauth(auth)
        self.find_or_create_by(uid: auth['uid'], provider: auth['provider']) do |u|
            u.name = auth['info']['first_name']
            u.email = auth['info']['email']
            u.password = SecureRandom.hex(15)
        end
    end

    private
    def auth
        request.env['omniauth.auth']
    end



end
