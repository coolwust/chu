package main

import (
	"flag"
	"net"
	"net/http"
)

var (
	port string
)

func init () {
	flag.Parse()
	port = *flag.String("port", "8080", "HTTP server port")
}

func main() {
	listener, err := net.Listen("tcp", ":" + port)
	if err != nil {
		panic(err)
	}
	mux := http.NewServeMux()
	mux.HandleFunc("/", indexHandler)
	mux.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("public"))))
	if err := http.Serve(listener, mux); err != nil {
		panic(err)
	}
}
