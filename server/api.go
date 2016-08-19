package main

import (
	"time"

	"gopkg.in/mgo.v2"
	"gopkg.in/mgo.v2/bson"

	"gopkg.in/labstack/echo.v1"
)

// API is a defined as struct bundle
// for api. Feel free to organize
// your app as you wish.
type API struct{}

// Post defines data for mongodb
type Post struct {
	ID         bson.ObjectId `json:"id" bson:"_id,omitempty"`
	Title      string        `json:"title"`
	Body       string        `json:"body"`
	Author     string        `json:"author"`
	Created    time.Time     `json:"created"`
	LastEdited time.Time     `json:"lastEdited"`
}

// Bind attaches api routes
func (api *API) Bind(group *echo.Group) {
	group.Get("/v1/conf", api.ConfHandler)
	group.Get("/v1/posts", api.PostsRoute)
}

// ConfHandler handle the app config, for example
func (api *API) ConfHandler(c *echo.Context) error {
	app := c.Get("app").(*App)
	<-time.After(time.Millisecond * 500)
	c.JSON(200, app.Conf.Root)
	return nil
}

// PostsRoute mongodb API example
func (api *API) PostsRoute(c *echo.Context) error {
	session, err := mgo.Dial("localhost:27017")
	if err != nil {
		panic(err)
	}
	defer session.Close()

	result := make([]Post, 0, 10)
	if err := session.DB("go").C("post").Find(nil).All(&result); err != nil {
		return err
	}

	// mPost, _ := bson.Marshal(&result)

	return c.JSON(200, result)
}
