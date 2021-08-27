module Api::V1
    class SessionsController < ApplicationController
        def destroy
            session.clear
        end

        def create
        user = User.find_by(email: params[:user][:email])
            if user && user.authenticate(params[:user][:password])
                session[:user_id] = user.id
                #also could the redirect go to '/users/#{user.id}'
            else
                render json: {errors: session.errors}, status: :unprocessable_entity
            end
        end

        def omniauth
            user = User.from_omniauth(auth)
            if user.valid?
                session[:user_id] = user.id

            else
                render json: {errors: session.errors}, status: :unprocessable_entity
            end
        end

        private
        def auth
            request.env['omniauth.auth']
        end
    end
end