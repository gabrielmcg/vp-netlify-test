---
title: Horizontal pod autoscaling walkthrough
date: 2019-02-28
description: An example of scaling pods based on CPU usage
---

# Horizontal pod autoscaling

Introduction to HPA at [https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)

Example we will be using is based on [https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough/)



## Prerequisites

-   Install the `kubectl` binary on your Ansible box
-   Install the UCP Client bundle for the `admin` user
-   Confirm that you can connect to the cluster by running a test command, for example, `kubectl get nodes`
-   Install `metrics-server`


<iframe src="https://player.vimeo.com/video/320716536" width="640" height="359" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/320716536">hpa1-orig</a> from <a href="https://vimeo.com/user70769296">cnocfraoigh</a> on <a href="https://vimeo.com">Vimeo</a>.</p>



