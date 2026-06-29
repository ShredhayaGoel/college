class addition {
    int add(int a, int b) {
        return a + b;
    }

    public static void main(String args[]) {
        addition obj = new addition();
        int sum = obj.add(5, 10);
        System.out.println("The sum is: " + sum);
    }
}

class b extends addition {
    int add(int a, int b) {
        return a + b + 10; // Overriding the add method to add an extra 10
    }

    public static void main(String args[]) {
        b obj = new b();
        int sum = obj.add(5, 10);
        System.out.println("The sum with override is: " + sum);
    }
}
