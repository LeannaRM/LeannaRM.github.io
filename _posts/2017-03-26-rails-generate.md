---
title:  "Demystifying Rails Generate"
index_image: "assets/rails-logo.jpg"
---

Rails allows users to easily create many files with the generate command. Utilizing this command saves users lots of time by using templates to create files and code.

There are many uses of generate. The easiest way to find information on how to use it is to type ```rails generate -h``` into the command line. This provides a list of all the options and parameters. We find that there is a substantial list of "generators"
- assets
- controller
- generator
- helper
- integration_test
- jbuilder
- job
- mailer
- migration
- model
- resource
- scaffold
- scaffold_controller
- task

Here I will cover the most common uses of the generate command: model, controller, and scaffold.

### Generate Model
We will begin by discussing ```rails generate model``` where the first thing to consider is what the syntax is for running this command.

	rails generate model NAME 
	 [field[:type][:index] field[:type][:index]] [options]

We can see that in order to generate a model with rails we first of all need a name for our model. We will call our model ```User``` - note that models are named in the singular form. Additionally we must provide any data we would like associated with our model. We will include a name and an email for our user. Therefore we can create our User model:

	rails generate model User name:text email:text

Then the magic happens.

<script src="https://gist.github.com/LeannaRM/ccdb2aaf1b8c7b467139147167c63068.js"></script>

We'll quickly go through each of the step that have happened. On line 2, generate creates a migration file. This file is used to tell the database what changes to make when we subsequently run ```rake db:migrate```. Next rails generate creates the user model file, the user model test file and a yml file.

To summarize, ```rails generate model``` creates
- migration
- model
- model test


### Generate Controller
Next we'll dive into ```rails generate controller``` where the syntax is very similar to generate model

	rails generate controller NAME 
	 [action action] [options]

The major difference is when we generate a model we would like to include the fields in that model where when we create a controller we would like to include the actions of that controller.

	rails generate controller User

The magic happens

<script src="https://gist.github.com/LeannaRM/e13a86ae11dfd1aa3532b2286f50e525.js"></script>

In this case, rails generate creates many files including the controller, view folder, test, helper, javascript, and css.

To summarize, ```rails generate controller``` creates
- controller
- controller test
- files for front end: view, javascript, css




### Generate Scaffold

Lastly, we'll discuss ```rails generate scaffold```, this command is the most powerful of the three in that it creates the most files. It creates both a model and controller in addition to a number of other goodies.

	rails generate scaffold User name:text email:text

The magic: 

<script src="https://gist.github.com/LeannaRM/9a2b7bdd73c2788ecaf04d00f1d04a33.js"></script>

The first 6 lines are identical for generate model and generate scaffold since we are creating a model in both cases. Then we start to notice a major difference between scaffold and controller. When a scaffold is generated it not only creates a controller, but creates all of the RESTful actions too: new, create, update, edit, destroy, index, and show. These can be seen in the controller and a view is created for the get requests.
