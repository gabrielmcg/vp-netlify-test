# Installing kubectl

You can find the version number for the current stable version of `kubectl` at [https://kubernetes.io/docs/tasks/tools/install-kubectl/](https://kubernetes.io/docs/tasks/tools/install-kubectl/). At the time of writing, the stable version is `1.13`.

However, this version of `kubectl` is not compatible with UCP 3.0.\*. Instead, you need to install an earlier version, for example, `v1.10.4`. To download this specific version, follow the instructions below.

```
# version=v1.10.4
# wget -O kubectl https://storage.googleapis.com/kubernetes-release/release/${version}/bin/linux/amd64/kubectl
# chmod +x ./kubectl
# sudo mv ./kubectl /usr/local/bin/kubectl

# kubectl version
Client Version: version.Info{Major:"1", Minor:"10", GitVersion:"v1.10.4", GitCommit:"5ca598b4ba5abb89bb773071ce452e33fb66339d", GitTreeState:"clean", BuildDate:"2018-06-06T08:13:03Z", GoVersion:"go1.9.3", Compiler:"gc", Platform:"linux/amd64"}
Server Version: version.Info{Major:"1", Minor:"8+", GitVersion:"v1.8.11-docker-8d637ae", GitCommit:"8d637aedf46b9c21dde723e29c645b9f27106fa5", GitTreeState:"clean", BuildDate:"2018-04-26T16:51:21Z", GoVersion:"go1.8.3", Compiler:"gc", Platform:"linux/amd64"}

```

More details on installing `kubectl` are available at [https://kubernetes.io/docs/tasks/tools/install-kubectl/](https://kubernetes.io/docs/tasks/tools/install-kubectl/) 