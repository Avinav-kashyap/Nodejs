const express=require('express');
const fs=require('fs');

let movies=JSON.parse(fs.readFileSync('./data/movies.json'));

exports.checkId =(req,res,next,value)=>{
    console.log('Movie ID is' + value);
    //FIND THE MOVIE BASED ON THE PARAMETER
    let movie=movies.find((el)=>{
        return el.id === value*1

   });
   if(!movie){
    return res.status(404).json({
        status:"fail",
        message:'Movie with ID '+ id + '  is not found'
    })

}
next();

}

exports.validateBody =(req,res,next)=>{
    if(!req.body.name || !req.body.releaseYear)
    {
        return res.status(400).json({
            status :'fail',
            message:'Not a valid movie data'
        });
    }
    next();
}





const router=express.Router();

router.param('id',(req,res,next,value)=>{

    console.log('Movie ID is'+ value);
    next();

})

//GET -  api/v1/movies
router.get('/api/v1/movies',(req,res)=>{
    res.status(200).json({
        status: "success",
        requestedAt: req.requestedAt,
        count:movies.length,
        data:{
             movies:movies

        }
    });

});

//GET -  api/v1/movies/id
router.get('/api/v1/movies/:id',(req,res)=>{
    console.log(req.params);
    //CONVERT ID TO NUMERIC VALUE
    const id=req.params.id *1;
    //FIND THE MOVIE BASED ON THE PARAMETER
    let movie=movies.find((el)=>{
         return el.id === id

    });
    if(!movie){
        return res.status(404).json({
            status:"fail",
            message:'Movie with ID '+ id + '  is not found'
        })

    }
    res.status(200).json({
        status:"success",
        data:{
            movie:movie
        }
    });
})


//POST-api/v1/movies
router.post('/api/v1/movies',(req,res)=>{
   // console.log(req.body);
    const newId=movies[movies.length-1].id +1;
    const newMovie=Object.assign({id:newId},req.body)
    movies.push(newMovie);

    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
             res.status(201).json({
                status:"success",
                data:{
                    movie:newMovie
                }
             })
    })
   // res.send('Created');

})

router.patch('/api/v1/movies/:id',(req,res)=>{
    let id=req.params.id * 1;
    let movieToUpdate=movies.find(el => el.id === id);

    if(!movieToUpdate){
        return res.status(404).json({
            status:'fail',
            message :"No movie object with ID"+ id +"is found"
        })

    }
    let index=movies.indexOf(movieToUpdate);

    Object.assign(movieToUpdate,req.body);
    movies[index]=movieToUpdate;

    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        res.status(200).json({
            status:"success",
            data:{
                movie:movieToUpdate
            }
         })


    })
})

router.delete('/api/v1/movies/:id',(req,res)=>{
    const id=req.params.id * 1;
    const movieToDelete=movies.find(el => el.id === id);
    if(!movieToDelete){
        return res.status(404).json({
            status:'fail',
            message :"No movie object with ID "+ id +" is found to delete"
        })

    }
    let index=movies.indexOf(movieToDelete);

    movies.splice(index,1);

    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        res.status(204).json({
            status:"success",
            data:{
                movie:null
            }
         })


    })
})

module.exports =router;