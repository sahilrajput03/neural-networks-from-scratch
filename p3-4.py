import numpy as np

X = [[1,2,3,2.5], [2.0, 5.0, -1.0, 2.0], [-1.5, 2.7, 3.3, -0.8]]
# we have three samples of inputs

class Layer_Dense:
    def __init__(self, n_inputs, n_neurons):
        self.weights = 0.10 *np.random.randn(n_inputs,n_neurons)
        self.biases = np.zeros((1, n_neurons))
    def forward(self, inputs):
        self.output = np.dot(inputs, self.weights) + self.biases

layer1 = Layer_Dense(4,5) # First paramere is input_size, second param is no. of neurons in the layer
layer2 = Layer_Dense(5,2)

print('layer1 output:\n')
layer1.forward(X)
print(layer1.output)

print('\n\n\n')

print('layer2 output:\n')
layer2.forward(layer1.output)
print(layer2.output)
