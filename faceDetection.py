import cv2

#Load trained cascade Classifier
face_cascade=cv2.CascadeClassifier('haarcascade_frontalface_default.xml')

#read the given Image
color_image=cv2.imread('face.jpg')

#Convert image in to grayscale
gray_image=cv2.cvtColor(color_image,cv2.COLOR_BGR2GRAY)

#Detect faces ROI
#Syntax :Classifier.detectMultiScale(input image,Scale Factor ,Min Neighbors)
faces=face_cascade.detectMultiScale(gray_image,1.1,5)

#Draw rectangle around the faces
for (x,y,w,h) in faces:
    cv2.rectangle(color_image,(x,y),(x+w,y+h),(0,255,0),4)

#Show Image
cv2.imshow('Image',color_image)

#wait to close window
cv2.waitKey()

#close all windows
cv2.destroyAllWindows()
