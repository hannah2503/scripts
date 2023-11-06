# Lambda template generator

In your terminal move to the `modules/lambda-template` directory and then run

```javascript
npm link
```

This will set up the `create-lamba-template` command to work globally. (I think you only need to do this once but not 100% sure - this is one of my first script like this)

When you are ready to run the command, in your terminal, move to directory where you want to add a new lambda file and run 

```javascript
create-lambda-template [plain | api]
```

Now you should have a folder with a template lambda in it!

We can add more code to this script to do specific templates and other fun things. This is just version 1! 