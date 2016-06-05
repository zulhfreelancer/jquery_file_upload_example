### jQuery File Upload (multiple) on Rails Example

Based on [RailsCasts previous example](https://github.com/railscasts/381-jquery-file-upload/tree/master/gallery-after).

In this app, I upload multiple videos at one time and show progress bar for each uploading video(s). After it completes, we hide the individual progress bar and show the video using [Plyr](https://github.com/Selz/plyr).

- Rails 4.2.6
- Ruby 2.2.0

```
git clone ...
cd jquery_file_upload_example
bundle install
bundle exec rake db:migrate
RAILS_ENV=development bundle exec rails s
```