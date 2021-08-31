package main

import (
	"context"
	"encoding/gob"
	"fmt"
	"log"
	"math"
	"os"
	"os/signal"
	"syscall"
	"time"
)

const (
	numberOfNodes     int   = 21
	numberOfPeers     int   = 5
	listenPort        int64 = 11111
	numberOfDelegates int64 = int64(numberOfNodes)
	slotTimeInterval  int64 = 3
)

var (
	maxFPNode           = int64(math.Floor(float64((numberOfDelegates - 1) / 3)))
	currentForger int64 = -1
)

func gobInterfaceRegister() {
	gob.Register(Block{})
	gob.Register(Transaction{})
	gob.Register(StageMessage{})
}

func init() {
	gobInterfaceRegister()
}

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	sysdone := make(chan struct{}, 1)
	sigCh := make(chan os.Signal, 1)

	log.SetFlags(log.LstdFlags | log.Lshortfile)
	signal.Notify(sigCh, syscall.SIGINT, syscall.SIGTERM)

	go func() {
		<-sigCh
		sysdone <- struct{}{}
	}()

	fmt.Println("MAX FP Node", maxFPNode)

	nodes := make([]*Node, 0)

	for i := 0; i < numberOfNodes; i++ {
		node := NewNode(ctx, int64(i))
		nodes = append(nodes, node)
	}

	fmt.Println("===================================")
	time.Sleep(time.Second * 1)

	for i := 0; i < numberOfNodes; i++ {
		nodes[i].Connect(ctx)
	}

	fmt.Println("===================================")
	time.Sleep(time.Second * 1)

	for i := 0; i < numberOfNodes; i++ {
		fmt.Println("NodeId:", i, len(nodes[i].Peers))
	}

	fmt.Println("===================================")
	time.Sleep(time.Second * 1)

	for i := 0; i < numberOfNodes; i++ {
		go nodes[i].StartForging()
	}

	<-sysdone
	fmt.Println("SSS")
	cancel()
}
