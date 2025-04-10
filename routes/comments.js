const express = require("express");
const router = express.Router();

const comments = require("../data/comments");
const error = require("../utilities/error");

router
.route("/")
.get((req,res,next)=>
{
  const {userId,postId} = req.query;
  //Retrieves comments by the user with the specified userId.
  if(userId)
  {
    const comment = comments.find((c)=> c.userId == userId);
    if(comment)
      res.json(comment)
    else
      next();
    

  }
  //Retrieves comments made on the post with the specified postId.
  else if(postId)
  {
    const comment = comments.find((c)=> c.postId == postId);
    if(comment)
      res.json(comment)
    else
      next();
    
  }
  else
    res.json(comments);
})
.post((req, res) => {
  // Within the POST request route, we create a new
  // user with the data given by the client.
  // We should also do some more robust validation here,
  // but this is just an example for now.
  if (req.body.userId && req.body.postId && req.body.body) {
    
    const comment = {
      id: comments[comments.length - 1].id + 1,
      userId: req.body.userId,
      postId: req.body.postId,
      body: req.body.body,
    };

    comments.push(comment);
    res.json(comments[comments.length - 1]);
  } else res.json({ error: "Insufficient Data" });
});

//Retrieves the comment with the specified id.
router
.route("/:id")
.get((req,res,next)=>
{
  const comment = comments.find((c)=> c.id == req.params.id)
  if(comment)
    res.json(comment)
  else
    next();
})
//Used to update a comment with the specified id with a new body.
.patch((req,res,next)=>
{
  const comment = comments.find((c,i)=>
  {
    if(c.id == req.params.id)
    {
      for(const key in req.body)
      {
        comments[i][key] = req.body[key]
      }
      return true;
    }

  })
  if(comment)
    res.json(comment);
  else
    next();
})

//Used to delete a comment with the specified id.
.delete((req,res,next)=>
{
  const comment = comments.find((c,i)=>
  {
    if(c.id == req.params.id)
    {
      comments.splice(i,1);
      return true;
    }
    
  })
  if(comment)
    res.json(comment);
  else
    next();
})

module.exports = router;


