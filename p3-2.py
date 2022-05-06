import numpy as np

# NOW WE HAVE INPUTS AS BATCH OF INPUTS
inputs = [[1,2,3,2.5], [2.0, 5.0, -1.0, 2.0], [-1.5, 2.7, 3.3, -0.8]]

weights = [
    [0.2, 0.8, -0.5, 1],
    [0.5, -0.91, 0.26, -0.5],
    [-0.26, -0.27, 0.17, 0.87] ]

biases = [2, 3, 0.5]

# Using transpose method to fix the shape error
output = np.dot(inputs, np.array(weights).T) + biases
##### This would give us different output though ~ Sahil
# output = np.dot(weights, np.array(inputs).T) + biases

print(output)
