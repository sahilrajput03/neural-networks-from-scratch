// what are inputs?
// Ans. It could be one of two things: an input layer.
// for e.g, it could values from sensors which we need to predict system failure in future.

// We're modelling a layer (three neuron) with four inputs
inputs = [1, 2, 3, 2.5] // this could be input from other layer

// each neuron has its unique own WEIGHT, BIAS and OUTPUT correspondingly
weights1 = [0.2, 0.8, -0.5, 1]
weights2 = [0.5, -0.91, 0.26, -0.5]
weights3 = [-0.26, -0.27, 0.17, 0.87]

bias1 = 2
bias2 = 3
bias3 = 0.5

// The real struggle/crux of machine leanring is how to adjust to weights and biases to get desired output:
output = [
	inputs[0] * weights1[0] + inputs[1] * weights1[1] + inputs[2] * weights1[2] + inputs[3] * weights1[3] + bias1,
	inputs[0] * weights2[0] + inputs[1] * weights2[1] + inputs[2] * weights2[2] + inputs[3] * weights2[3] + bias2,
	inputs[0] * weights3[0] + inputs[1] * weights3[1] + inputs[2] * weights3[2] + inputs[3] * weights3[3] + bias3]

console.log(output)
