FROM node:16

WORKDIR /app
#v2 addition yarn
# COPY package.json ./
# COPY yarn.lock ./
# RUN yarn install
# COPY . .
# RUN yarn build
#v2 ends
COPY . .

RUN npm install
# RUN npm run build

# Stage 2: Serve with Nginx,  Serve the production build with nginx
# FROM nginx:1.27.0-alpine
# #v1
# COPY --from=0 /app/dist /usr/share/nginx/html
# COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the built app from Stage 1
# COPY --from=build /app/build /usr/share/nginx/html

# Copy Nginx configuration
# COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
CMD ["npm", "run", "build"]
# CMD ["nginx", "-g", "daemon off;"]

