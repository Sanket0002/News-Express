import React from "react";

const NewsItems =(props)=> {
    let { title, description, imageUrl, newsUrl, author, date,source } = props;

    return (
      <div>
        <div className="card my-3" style={{backgroundColor:props.mode==='dark'?'black':'white'}}>
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0',}}>
        <span className=" badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://images.indianexpress.com/2022/01/omicron-13.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body" >
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text" >{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} On
                {new Date(date).toGMTString()}
              </small>
            </p>
            <button >
              <a
                rel="noreferrer"
                href={newsUrl}
                target="_blank"
                className={`btn btn-sm btn-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                Go To News
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }

export default NewsItems;
