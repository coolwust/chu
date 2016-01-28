package main

import (
	"net/http"
	"html/template"
)

func indexHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		http.NotFound(w, r)
		return
	}
	template.Must(template.ParseFiles("view/base.html", "view/index.html")).ExecuteTemplate(w, "base", nil)
}
