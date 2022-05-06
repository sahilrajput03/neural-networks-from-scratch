// what are inputs?
// Ans. It could be one of two things: an input layer.
// for e.g, it could values from sensors which we need to predict system failure in future.

// We're modelling one neuron with four inputs
inputs = [1, 2, 3, 2.5] 
weights = [0.2, 0.8, -0.5, 1]
bias = 2

output = inputs[0]*weights[0] + inputs[1]*weights[1] + inputs[2]*weights[2] + inputs[3]*weights[3] + bias



console.log(output)
