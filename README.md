# Hi there! 👋

This GitHub repository provides code for Docker compose with the yaml language 

# Getting started

## Requirements
* Virtual machine e.g Virtual box from oracles official website: 
* Enable Hyper-V with your windows machine and enable virtualization with BIOS from windows machine:
* Install chocolatey 
    ```bash
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
    ```
* Kubernetes extension from microsoft on visual studio code
* Google cloud code extension.

##  Installation
* Install Kubernetes-cli with choco
    ```bash
    choco install kubernetes-cli
    ```
* Install minikube to run kubernetes and virtual machines
    ```bash
    choco install minikube
    ```
* Start minikube 
    ```bash
    minikube start
    ```

## Running the App
* Running Kubernetes
    ```bash
    kubectl apply -f nginx-pod.yaml
    ```
* Run Kubectl apply
     ```bash
    kubectl get pods
    ```
* Get all deployments 
    ```bash
    kubectl logs nginx-pod
    ```
* Get all pods
    ```bash
    kubectl exec -it nginx-pod --/bin/nash
    ```
* Find url to access Nginx server
    ```bash
    kubectl port-forward nginx-pod 8080:80
    ```
* After running this command, open your web browser and navigate to:

http://localhost:8080
    
