from rest_framework.decorators import api_view
from rest_framework.request import Request
from rest_framework.views import Response

from .riddles import riddle_repo
from rest_framework import status
import random


@api_view(["POST", "GET"])
def get_riddle(request: Request):
    if request.method == "POST":
        request_date: str = request.data.get("date")  # type: ignore it is going crazy

        try:
            date = request_date

        except Exception as e:
            return Response(
                f"The format from the frontend is not matching",
                status=status.HTTP_400_BAD_REQUEST,
            )

        return Response(random.choice(riddle_repo), status=status.HTTP_200_OK)

    if request.method == "GET":

        return Response(random.choice(riddle_repo), status=status.HTTP_200_OK)
