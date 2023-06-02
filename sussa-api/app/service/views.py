from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Service
from .serializers import ServiceSerializer


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.filter(visible=True)
    serializer_class = ServiceSerializer

  
class GetServiceByIdView(APIView):
    
    def get(self,request,service_id):
        queryset = Service.objects.filter(id=service_id).first()
        serializer = ServiceSerializer(queryset)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
        