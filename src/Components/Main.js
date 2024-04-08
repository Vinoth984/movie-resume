import React,{useEffect, useState} from 'react'
import Card from './Card';
let API_KEY="&api_key=e7e1686a67a7311982da1ee6fb1b4157";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_KEY;
let arr=["Trending","Top Rated", "Kids" ,"Adventure","Horror"]; 




const Main=()=>{
    const[movieData,setData]=useState([]);
    const[url_set,seturl]=useState(url);
    const[search,setSearch]=useState();

    useEffect(()=>{
        fetch(url_set).then(res=>res.json()).then(data=>{
                    console.log(data);
                    setData(data.results);
        });


    },[url_set])
    const getData=(movieType)=>{
        if(movieType=="Trending")
        {
            url=base_url+"/trending/movie/day?language=en-US"+API_KEY;
        }
        if(movieType=="Top Rated")
        {
            url=base_url+"/movie/top_rated?language=en-US&page=1"+API_KEY
        }
        if(movieType=="Kids")
        {
            url="https://api.themoviedb.org/3/discover/movie?&api_key=e7e1686a67a7311982da1ee6fb1b4157&with_genres=16"
        }
    
        if(movieType=="Adventure")
        {
        url="https://api.themoviedb.org/3/discover/movie?&api_key=e7e1686a67a7311982da1ee6fb1b4157&with_genres=12"
        }
        if(movieType=="Horror")
        {
        url="https://api.themoviedb.org/3/discover/movie?&api_key=e7e1686a67a7311982da1ee6fb1b4157&with_genres=27"
        }
        seturl(url);
    }
    const searchMovie=(evt)=>{
        if(evt.key=="Enter")
        {
            console.log.apply("hello")
        }

        
    }

    return(
        <>
        <div className='header'>
            <nav>
                <ul>
                    {
                        arr.map((value)=>{
                            return(
                                <li><a href='#'name={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a></li>
                            )
                        })
                    }
                    
                    
                    
                </ul>
            </nav>
            <form>
                
            </form>
        </div>
        <div className='container'> 
              {
                (movieData.length==0)?<p className="not found">NOT FOUND</p>:movieData.map((res,pos)=>{
                    return(
                        <Card info={res} key={pos}/>
                    )
                })


              }
        </div>

        </>

    )

}  


export default Main;